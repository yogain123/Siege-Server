# Siege-Server

Benchmark Node Server using Siege

### Installing Siege on Mac OS X

- Open The Terminal
- Download Siege <br>
  `curl -C - -O http://download.joedog.org/siege/siege-latest.tar.gz`
- Extract the tarball<br>
  `tar -xvf siege-latest.tar.gz`
- Change directories to the extracted directory (again, currently siege-2.70)
  `cd siege-2.70/`
- Run the following commands (one at a time) to build and install siege. If you have an older version of siege read the INSTALL file for more instructions.<br>

```
./configure
make
make install
```

- Check
  `siege` <br>

### Benchmarking with siege

The following sends a 10 requests across 10 concurrent connections for benchmarking (no delay between requests).
`siege -c 10 -r 10 -b http://localhost:3000/`
