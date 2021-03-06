import socketio

sio = socketio.Client(engineio_logger=True)

@sio.event
def connect():
  sio.emit('join', {'userid': 2})

@sio.on('message')
def parse(data):
  print(data)

@sio.on('failure')
def disconnect():
  sio.disconnect()
  exit()

#no messages on server
@sio.on('empty')
def empty():
  pass

@sio.event
def scroll():
  sio.emit('scroll')
  
sio.connect('http://localhost:30003')
while True:
  str = input()
  if str == 'q':
    break
  elif str == '1':
    scroll()
  else:
    sio.emit('message', {'message': str, 'receiver': [3]})
