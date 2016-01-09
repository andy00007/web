##关于inline-block
######在做to-do Tool的过程中遇到了这样的问题，就是把三个span标签的display属性值置为inline-block，结果发现他们之间存在间距。那这是为什么呢？当下就把锅摔给了inline-block，今天趁着to-do Tool已经做完了，在网上查看了不少资料，了解了一下关于inline-block的前世今生。
###一、不同元素，不同浏览器上的表现
#####亲自在IE6，IE7上测试了一下inline元素，发现有点不一样，在标签里含有内容时，与现代主流浏览器的表现是一样的。

######测试代码：
	<div id="test-span">
	    <a>test</a>
	    <a>测试</a>
	    <a>test</a>
	    <a>测试</a>
	</div>
	<style>
	     #test-span a{
            display: inline-block;
            width: 100px;
            height: 30px;
            border: 5px solid blue;
         }
	</style>
运行效果

----------
 ![](http://i.imgur.com/JmL3orB.png)
#####但是当没有内容的时候，间距就没了，这与其他浏览器不同，可能是因为IE6，IE7所支持的inline-block与CSS2.1(现代浏览器)所支持的inine-block压根就不是同一个东西，参考[http://ued.taobao.org/blog/2012/08/inline-block/](http://ued.taobao.org/blog/2012/08/inline-block/ "淘宝UED所写的")
####而对于block元素就大不同啦，IE6，IE7中对block元素的display属性赋为inline-block，block元素也不会换行。因此有了如下的经典hack
	<style>
		#test-div div {
			display: inline-block; //对于IE8+
			*display: inline; //对于IE6,IE7
			*zoom: 1; //hasLayout
		}
    </style>
####使用display:inline强制换行，再使用zoom:1触发hasLayout，使它显示为应有的样子
###二、回到正题，为什么会有间距
####W3C9.1中规定空格符，制表符，换行符都是空格符。通常情况下，对于多个连续的空白符（空格，换行符，回车符等），浏览器会将他们合并为一个空白符。所以间距不是inline-block造成的，是默认就存在的，inline元素不设置inline-block也会有的。
###三、怎么去除间距
#####1、既然是因为空白符产生的间距，那么把font-size设为0就好了嘛。确实，这样做可以在大多数浏览器中解决这个问题，但是Safari不支持这样做，IE6，IE7也还存在1px的间距
#####2、对于Safari，可以使用letter-spacing属性，将其置为一个负值，那应该取多少呢，请参考[http://www.iyunlu.com/view/css-xhtml/58.html](http://www.iyunlu.com/view/css-xhtml/58.html)。通常情况下，取-5px。注意：这种做法会影响到其他浏览器的内容，慎用。
#####3、最后来解决一下IE6,7那始终存在的1px。word-spacing:-1px;秒杀，哈哈。用他就好了，设置在父元素上。
#####注意给父元素设置font-size:0的时候别忘了在元素上重新给font-size赋值，不然继承之后，文字就显示不了了。


----------

####最后的最后，是一个关于inline-block的小问题，就是display：inline-block，是基于baseline对齐的，大小不一会导致上下不齐，所以设置的时候最好设置vertical-align属性。否则就会出现这种情况
![](http://i.imgur.com/oaIu7Q9.png)
######设置vertical-align:top就好了