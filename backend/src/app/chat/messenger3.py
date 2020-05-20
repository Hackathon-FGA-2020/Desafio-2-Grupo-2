import socketio

sio = socketio.Client(engineio_logger=True)

@sio.event
def connect():
  sio.emit('join', {'userid': '3'})

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
  sio.emit('scroll', {'userid': '3'})
  
sio.connect('http://localhost:30003')
while True:
  str = input()
  if str == 'q':
    break
  else:
    sio.emit('message', {'message': str, 'receiver': [1, 2]})
