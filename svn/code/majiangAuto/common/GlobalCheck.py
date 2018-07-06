def checkReady():
    while True:
        isReady = str(input('请确保手机打开了 ADB 并连接了电脑，'
                            '然后打开游戏并【开始游戏】后，再启动本程序，确定开始？[y/n]:'))
        if isReady == 'y':
            break
        elif isReady == 'n':
            print('谢谢使用，再见！', end='')
            exit(0);
        else:
            print('请重新输入')

            