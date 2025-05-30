addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

const SECRET_UUID = 'UUID';#替换为你自己的

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/dns-query') {
    // 只验证 Basic 认证
    const authHeader = request.headers.get('Authorization');
    
    const isAuthenticated = validateBasicAuth(authHeader, SECRET_UUID);
    
    if (!isAuthenticated) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic' }
      });
    }
    
    // 构建转发 URL
    const dohUrl = 'https://cloudflare-dns.com/dns-query' + url.search;#可以更改为你喜欢的公共doh
    
    const response = await fetch(dohUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    return response;
  } else {
    return new Response('This is a custom DNS over HTTPS endpoint powered by Cloudflare Workers.', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

function validateBasicAuth(authHeader, expectedToken) {
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }
  
  try {
    // 解码 Base64 编码的用户名:密码
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = atob(base64Credentials);
    
    // 用户名可以为空，只检查密码
    const token = credentials.split(':')[1] || '';
    
    return token === expectedToken;
  } catch (e) {
    return false;
  }
}