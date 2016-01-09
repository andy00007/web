##我对BFC的理解
###起因：接触到BFC源于写布局时遇到的一个坑。本来是想将一个绿色div包含在一个红色div中，margin为30px,代码如下
    <!DOCTYPE html>
    <html>
    <head>
	<style type="text/css">
		.main{
			height:500px;
			background-color:red;
		}
		.content{
			margin:30px;
			height:300px;
			background-color:green;
		}
	</style>
    </head>
    <body>
	<div class="main">
		<div class="content"></div>
	</div>
    </body>
    </html>
###代码咋看起来没错吧，我也觉得没错，不就是在里面那个div上面加一个margin嘛。但是结果是这样的
![](http://i.imgur.com/FpRnzSG.png)
###为什么margin到了.main div上面了，我想了很久，找不到原因，决定再看看书。结果让我想抽自己
    当一个元素包含于另一个元素中时（假设没有padding或border把margin分隔开），他们的上/下margin会发生合并
###so，.main div的上margin跟.content div的上margin合并了，因此margin出现在了.main div上面
##怎么解决？
###感谢大师兄及时到来，为我解决疑惑。给.main div加一个overflow属性，属性值设为hidden
    <!DOCTYPE html>
    <html>
    <head>
	<style type="text/css">
		.main{
			height:500px;
			background-color:red;
			overflow: hidden;
		}
		.content{
			margin:30px;
			height:300px;
			background-color:green;
		}
	</style>
    </head>
    <body>
	<div class="main">
		<div class="content"></div>
	</div>
    </body>
    </html>
![](http://i.imgur.com/VIEKx92.png)
###这下正常了吧，立马追问大师兄为什么设了一个overflow属性就好使了呢，大师兄就告诉了我 BFC这个神奇的东西
##BFC是什么？
###BFC(Block formatting context)直译为“块级格式化上下文”。我把他理解为一个独立开来的一个区域，他决定他内部的块级Box怎么布局，并且与外部毫不相干。
###根据w3c对BFC的描述，大概有以下几点规则：

1. 在创建了BFC的元素中，其子元素按文档流一个接一个的放置。
2. 在BFC中，每一个元素的左边缘与包含块的左边相接触（对于从右往左的格式化，右边缘接触右边），即使发生浮动也是如此（只不过会由于浮动而压缩），除非这个元素创建了一个新的BFC。
3. 创建了BFC的元素不能与浮动元素重叠
4. 计算BFC的高度时需要计算浮动元素的高度
5. BFC就是页面上的一个独立的容器，容器内的元素不影响外部元素。外部元素也不会影响容器内部元素

----------

####那怎么产生BFC呢？
1. float的值不为none
2. overflow的值不为visible
3. display的值为table-cell,table-caption,inline-block中的任何一个
4. position的值不为relative和static

----------

######当一个html元素满足下面条件中的任何一点时，都可以产生BFC
#####1、就比如说之前那个栗子，为什么设置了overflow属性为hidden之后margin就是相对于.main div了呢？因为.main div这时候是一个BFC，与外部元素无关，所以内部包含的div上的margin只能是相对于.main div
####2、再举个栗子：自适应两栏布局
    <!DOCTYPE HTML>
    <html>
    <head>
	<style type="text/css">
		.main{
			float:left;
			background-color:red;
        	width: 200px;
        	height:100px;
		}
		.content{
			background-color:green;
			height:200px;
		}
	</style>
    </head>
    <body>
		<div class="main"></div>
		<div class="content"></div>
    </body>
    </html>
######页面
![](http://i.imgur.com/xHw7NvJ.png)
#####根据第3条规则，很清楚就可以知道，只要让.content div也成为一个BFC就可以了吧，so,在.content的css中加上overflow:hidden这条语句就ok了。
#####3、还有一个栗子，清除内部浮动
    <!DOCTYPE html>
    <html>
    <head>
	<style type="text/css">
		.main{
			border: 5px solid green;
        	width: 300px;
		}
		.child{
			float:left;
			width:100px;
			height:100px;
			border: 5px solid #f66;
		}
	</style>
    </head>
    <body>
	<div class="main">
		<div class="child"></div>
		<div class="child"></div>
	</div>
    </body>
    </html>
![](http://i.imgur.com/fzQTvt7.png)
#####因为没有计算浮动元素的高度，所以.main div高度没有撑开。根据第5条原则，只需要把.main div触发BFC就好了

###总之就是记住一句话，BFC是一个独立的容器
######可能理解的不全，可能理解的有偏差，希望各位前辈多多指教
 