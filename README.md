# 🛡️ Cloudflare Worker DNS over HTTPS (DoH) Endpoint 🚀

✨ 轻松在 Cloudflare Workers 上部署您自己的 DNS over HTTPS 服务 ✨

---

## 📝 项目简介 (Introduction)

本项目提供了一段精简的 JavaScript 代码，用于部署在 Cloudflare Workers 平台上，从而搭建一个基于 **DNS over HTTPS (DoH)** 协议的 DNS 解析端点。

通过利用 Cloudflare 强大的全球网络和免费的 Workers 服务，您可以轻松拥有一个自定义或私密的 DoH 服务，用于提高您的网络隐私和安全性，或者绕过某些网络限制。

本项目的主要目标是提供一个简单易懂、易于部署的 DoH Worker 示例。

## ✨ 项目特性 (Features)

* **轻量高效:** 代码简洁，运行在 Cloudflare Workers 无服务器环境，资源消耗极低。
* **全球部署:** 利用 Cloudflare 的全球边缘网络，提供低延迟的 DNS 解析服务。
* **支持 DoH:** 完全遵循 DNS over HTTPS 标准协议。
* **易于部署:** 只需几步简单的配置和命令即可部署。
* **免费额度友好:** Cloudflare Workers 通常提供慷慨的免费额度，适合个人使用。
* **可定制 (待实现/根据你的代码情况说明):** 如果你的代码支持，这里可以说明如何修改上游 DNS 服务器等。

## 🛠️ 准备工作 (Prerequisites)

在开始部署之前，请确保您已经拥有以下条件：

* 一个 [Cloudflare 账户](https://www.cloudflare.com/)。
* 对 Cloudflare Workers 有基本的了解。

* 克隆或下载了本项目代码。

## 🚀 部署指南 (Deployment)

按照以下步骤将代码部署到您的 Cloudflare Worker：


 **部署到 Cloudflare:**
 新建一个workers项目，把上方doh代码复制到workers代码，注意更改UUD，

**在创建好的worker项目中添加路由**

## ⚙️ 配置说明 (Configuration)

路由规则：yourdomain.xx/*

注意后面带*

这样就配置好了，

最终你的私人doh连接为：https://auth:UUID@yourdomain.xx/dns-query

UUID放到链接里面，不会被探测到，更安全。
