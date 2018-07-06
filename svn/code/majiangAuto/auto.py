#!/usr/bin/env python3
# -*- coding: utf-8 -*-

'''
test 版本
'''

import os
import sys
import subprocess
import time
import random
import re
from PIL import Image, ImageDraw
from io import BytesIO

from common import GlobalUtils
from common import GlobalCheck
from common import screenshot
from common import checkImage
from common import config
from common import debug
from common.auto_adb import auto_adb

# ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
DEBUG_SWITCH = True #调试
DELAY_TIME = 1    #运行间隔

#adb init
#adb = auto_adb()
#adb.test_device()
#load config
'''
config = config.open_accordant_config()
under_game_score_y = config['under_game_score_y']
# 长按的时间系数，请自己根据实际情况调节
press_coefficient = config['press_coefficient']
# 二分之一的棋子底座高度，可能要调节
piece_base_height_1_2 = config['piece_base_height_1_2']
# 棋子的宽度，比截图中量到的稍微大一点比较安全，可能要调节
piece_body_width = config['piece_body_width']
# 图形中圆球的直径，可以利用系统自带画图工具，用直线测量像素，如果可以实现自动识别圆球直径，那么此处将可实现全自动。
head_diameter = config.get('head_diameter')

if head_diameter == None:
    density_str = adb.test_density()
    matches = re.search(r'\d+', density_str)
    density_val = int(matches.group(0))
    head_diameter = density_val / 8
'''
#◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆

workTimes = 0
def logic():
    global workTimes
    workTimes = workTimes + 1
    GlobalUtils.MessLog('第',workTimes,'次：',time.time())
    binarayScreen = screenshot.pull_screenshot()
    ts = int(time.time())

    if DEBUG_SWITCH:
        debug.save_debug_screenshot(ts, binarayScreen, 0,0, 0, 0)
        #debug.backup_screenshot(ts)

    #binarayScreen.close()

def logicWin():
    pass
    binarayScreen = checkImage.getScreenShotAndSaved()
    ts = int(time.time() * 10000)

    if DEBUG_SWITCH:
        pass
        #debug.save_debug_screenshot(ts, binarayScreen, 0,0, 0, 0)
        #debug.backup_screenshot(ts)

    binarayScreen.close()

def main():
    timeBegain = time.time()
    num = 0

    #debug.dump_device_info()
    #screenshot.check_screenshot()

    while num < 50:
        logicWin()

        timeEnd = time.time()
        span = DELAY_TIME - (timeEnd - timeBegain)
        num = num + 1

        if(DELAY_TIME == 0):
            GlobalUtils.MessLogWithMillisecond('第', num, '次, 共耗时', timeEnd - timeBegain)
            continue

        if(span > 0):
            timeBegain = timeEnd + span
            time.sleep(span)
            GlobalUtils.MessLogWithMillisecond('第', num, '次：间隔', span, '秒')
        else:
            timeBegain = timeEnd
            GlobalUtils.MessLogWithMillisecond('第', num, '次：超时', span, '秒')

if __name__== '__main__':
    try:
        #GlobalCheck.checkReady()
        main()
    except KeyboardInterrupt:
        adb.run('kill-server')
        print('\n byebye', end='')
        exit(0)


