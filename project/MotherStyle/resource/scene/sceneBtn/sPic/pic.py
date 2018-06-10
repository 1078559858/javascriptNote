# -*-coding:utf-8-*-
pic = 's1.png';
name = 's1';

from PIL import Image
im = Image.open(pic)
# 图片的宽度和高度
img_size = im.size
print("图片宽度和高度分别是{}".format(img_size))
'''
裁剪：传入一个元组作为参数
元组里的元素分别是：（距离图片左边界距离x， 距离图片上边界距离y，距离图片左边界距离+裁剪框宽度x+w，距离图片上边界距离+裁剪框高度y+h）
'''
# 截取图片中一块宽和高都是250的
x = 0
y = 0
w = 472
h = 90
region = im.crop((x, y, x+w, y+h))
region.save(name + "_a.png")
 
# 截取图片中一块宽是250和高都是300的
x = 0
y = 110
w = 472
h = 90
region = im.crop((x, y, x+w, y+h))
region.save(name + "_b.png")

# 截取图片中一块宽是250和高都是300的
x = 0
y = 230
w = 472
h = 90
region = im.crop((x, y, x+w, y+h))
region.save(name + "_c.png")


# 截取图片中一块宽是250和高都是300的
x = 0
y = 344
w = 472
h = 90
region = im.crop((x, y, x+w, y+h))
region.save(name + "_d.png")