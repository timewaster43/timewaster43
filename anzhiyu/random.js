var posts=["2023/03/28/aboutvpn/","2022/12/14/hexo博客搭建进阶篇/","2023/07/13/gyradio-mg12/","2022/12/12/如何搭建hexo博客/","2023/01/01/元旦祝福/","2023/04/11/soundandsignal/","2022/12/11/关于你睡觉的事实/","2023/01/22/新春祝福/","2025/01/09/hello-world/","2023/01/11/黄金矿工/","2023/01/16/聊聊IP是什么/","2022/12/10/自我介绍/","2022/12/23/高精度运算/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };