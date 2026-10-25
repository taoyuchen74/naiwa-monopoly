from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse,parse_qs
from pathlib import Path
import time,socket
root=Path.cwd()/'out'
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(root),**kwargs)
 def translate_path(self,path):return super().translate_path(path[5:] if path.startswith('/game/') else path)
 def do_GET(self):
  parsed=urlparse(self.path);mode=parse_qs(parsed.query).get('qa',[''])[0]
  if parsed.path in ['/game/','/game/index.html']:
   if mode=='unavailable':
    self.send_response(503);self.end_headers();self.wfile.write(b'Temporary maintenance');return
   if mode=='portal':
    self.send_response(200);self.send_header('Content-Type','text/html');self.end_headers();self.wfile.write(b'<html>Wi-Fi login required</html>');return
   if mode=='slow':time.sleep(7)
   if mode=='disconnect':self.connection.shutdown(socket.SHUT_RDWR);self.connection.close();return
  try:super().do_GET()
  except (BrokenPipeError,ConnectionResetError):pass
ThreadingHTTPServer(('127.0.0.1',4174),Handler).serve_forever()
