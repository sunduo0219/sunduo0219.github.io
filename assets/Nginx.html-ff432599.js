import{_ as e,V as r,W as n,a1 as i}from"./framework-1f74d948.js";const a={},t=i('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="_1-overview" tabindex="-1"><a class="header-anchor" href="#_1-overview" aria-hidden="true">#</a> 1 Overview</h2><h3 id="_1-1-conceptual-framework" tabindex="-1"><a class="header-anchor" href="#_1-1-conceptual-framework" aria-hidden="true">#</a> 1.1 Conceptual Framework</h3><ul><li>目前有4种比较有名的版本：nginx开源、nginx商业、OpenResty、Tengine</li></ul><h3 id="_1-2-install-simple-use" tabindex="-1"><a class="header-anchor" href="#_1-2-install-simple-use" aria-hidden="true">#</a> 1.2 Install &amp; Simple Use</h3><ul><li><p>运行nginx主目录下的<code>sbin/nginx</code>即可启动、终止、关闭、重新加载配置</p><blockquote><p>nginx默认运行在80端口</p></blockquote></li></ul><p>目录结构：</p><ul><li>sbin：存放可执行程序<strong>nginx</strong></li><li>conf：存放<strong>配置文件</strong></li><li>html：存放页面和其他<strong>静态资源</strong></li><li>logs：存放<strong>日志</strong>，包括访问日志、错误日志和nginx主进程id号</li><li>*_temp：存放运行过程中的<strong>临时文件</strong></li></ul><h3 id="_1-3-基本运行原理" tabindex="-1"><a class="header-anchor" href="#_1-3-基本运行原理" aria-hidden="true">#</a> 1.3 基本运行原理</h3><ul><li>Master作为<strong>主进程</strong>，调度Worker子进程</li><li>Worker<strong>子进程响应用户请求</strong>，根据<strong>配置文件</strong>寻找资源</li></ul><h2 id="_2-configuration-virtual-host" tabindex="-1"><a class="header-anchor" href="#_2-configuration-virtual-host" aria-hidden="true">#</a> 2 Configuration &amp; Virtual Host</h2><h3 id="_2-1-最小配置" tabindex="-1"><a class="header-anchor" href="#_2-1-最小配置" aria-hidden="true">#</a> 2.1 最小配置</h3><ul><li><strong>业务（worker）进程数</strong>和<strong>单业务进程可接受连接数</strong></li><li><strong>http模块</strong><ul><li><strong>mime类型</strong>配置</li><li><strong>sendfile</strong>配置</li><li><strong>keepalive_timeout</strong>配置</li><li><strong>server模块</strong>配置<strong>虚拟主机</strong>，包括端口号、域名/主机名、资源映射等</li></ul></li></ul><h2 id="_3-reverse-proxy-load-balancing" tabindex="-1"><a class="header-anchor" href="#_3-reverse-proxy-load-balancing" aria-hidden="true">#</a> 3 Reverse Proxy &amp; Load Balancing</h2>',14),o=[t];function l(s,h){return r(),n("div",null,o)}const g=e(a,[["render",l],["__file","Nginx.html.vue"]]);export{g as default};
