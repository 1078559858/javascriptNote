import time

def MessLog(*args):
	now = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))

	for arg in args:
		now = now + ' ' + str(arg)

	print(now)

def MessLogWithMillisecond(*args):
	ms = time.time() * 1000 %1000
	ms = ('%.f' % ms)
	now = time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))
	now = now + '.' + str(ms)

	for arg in args:
		now = now + ' ' + str(arg)

	print(now)

def ShootScreen(filePath, fileName):
	pass