# -*- coding: utf-8 -*-
"""
1、加载样板图片
2、判断样板图片和截图是否一致

load 函数的作用
"""


import os
from PIL import Image
from io import BytesIO

#◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
#SAMPLE_IMAGEP_FOLDER = os.path.dirname(os.getcwd()) + '\\sampleImage\\'
SAMPLE_IMAGEP_FOLDER = '../sampleImage/'
CARD_A_DATA = 0         #card a binary data



#◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆

def getCardA() -> object:
    file = SAMPLE_IMAGEP_FOLDER + 'a.png'
    im = Image.open(file)
    return im.convert('L')

def getCardSample():
    file = SAMPLE_IMAGEP_FOLDER + 'sample.png'
    im = Image.open(file)
    return im.convert('L')

def getCardTest():
    file = SAMPLE_IMAGEP_FOLDER + 'tn.png'
    im = Image.open(file)
    return im

def getCardDragonSample():
    file = SAMPLE_IMAGEP_FOLDER + 'dragonSample.png'
    im = Image.open(file)
    return im.convert('L')

def getScreenShot(x = 0, y = 0, width = 600, height = 600):
    box = (x, y, width, height)
    im = ImageGrab.grab(box)
    return im

def getScreenShotAndSaved(x = 0, y = 0, width = 600, height = 600):
    ts = int(time.time() * 1000)
    name = str(PICTURE_PATH) + str(ts) + '.png'
    box = (x, y, width, height)
    im = ImageGrab.grab(box)
    im.save(name, 'PNG')
    return im

def checkTwoImage(searchImage, fatherImage, x = 0, y = 0):
    fw, fh = fatherImage.size
    sw, sh = searchImage.size

    num = 0

    for w in range(x, fw):
        for h in range(y, fh):
            
            isFound = True
            for iw in range(0, sw):
                for ih in range(0, sh):
                    num = num + 1

                    tw = w + iw
                    th = h + ih

                    fPixel = fatherImage.getpixel((tw, th))
                    sPixel = searchImage.getpixel((iw, ih))


                    if fPixel == sPixel:
                        continue

                    if fPixel != sPixel:
                        isFound = False
                        break

                if isFound == False :
                    break

 
    else:
        print('num=',num)
        return False

def main():
    #GlobalUtils.MessLog("begain")
    cardA = getCardA()
    cardSample = getCardSample()
    cardTest = getCardTest()
    cardDragonSample = getCardDragonSample()
    w,h = cardA.size

    out = cardTest.transpose(Image.FLIP_LEFT_RIGHT);
    out.save("../sampleImage/out1.png","PNG");

#box = (820, 870, 860, 910) #tiger
    box = (820, 750, 860, 790) #he
    #region = cardDragonSample.crop(box)
    region = cardA.convert("L")
    region.save("../sampleImage/hecc.png","PNG")

    #res = checkTwoImage(region, cardSample)

    cardSample.show()

if __name__ == '__main__':
    main()