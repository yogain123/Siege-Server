# Siege-Server

Benchmark Node Server using Siege

### Installing Siege on Mac OS X

- Open The Terminal
- Download Siege <br>
  `curl -C - -O http://download.joedog.org/siege/siege-latest.tar.gz`
- Extract the tarball<br>
  `tar -xvf siege-latest.tar.gz`
- Change directories to the extracted directory (again, currently siege-2.70) <br>
  `cd siege-2.70/`
- Run the following commands (one at a time) to build and install siege. If you have an older version of siege read the INSTALL file for more instructions.<br>

```
./configure
make
make install
```

- Check <br>
  `siege` <br>

### Benchmarking with siege

The following sends a 10 requests across 10 concurrent connections for benchmarking (no delay between requests).
`siege -c 10 -r 10 -b http://localhost:3000/`

Results:

#### Running server without forking

nodemon nodemon withoutCluster.js

![Screen Shot 1941-11-13 at 9 44 54 PM](https://user-images.githubusercontent.com/14003377/73611212-9b269800-4605-11ea-9592-a497585dc57d.png)

> transaction rate: 454.55 trans/sec

#### Running server with forking

nodemon nodemon withCluster.js

![Screen Shot 1941-11-13 at 9 45 55 PM](https://user-images.githubusercontent.com/14003377/73611223-b2658580-4605-11ea-853b-0811770fd1e8.png)

> transaction rate: 625 trans/sec
