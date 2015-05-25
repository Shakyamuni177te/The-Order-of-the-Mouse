cd "C:\Program Files\MongoDB\Server\3.0\bin\"

echo logpath=c:\data\log\mongod.log> "C:\Program Files\MongoDB\Server\3.0\bin\mongod.cfg"
echo dbpath=c:\data\db>> "C:\Program Files\MongoDB\Server\3.0\bin\mongod.cfg"

sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.0\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\3.0\bin\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"

net start MongoDB
