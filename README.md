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

## Results:

#### Running server without forking

`nodemon withoutCluster.js`

![Screen Shot 1941-11-13 at 9 44 54 PM](https://user-images.githubusercontent.com/14003377/73611212-9b269800-4605-11ea-9592-a497585dc57d.png)

> transaction rate: 454.55 trans/sec

#### Running server with forking

`nodemon withCluster.js`

![Screen Shot 1941-11-13 at 9 45 55 PM](https://user-images.githubusercontent.com/14003377/73611223-b2658580-4605-11ea-853b-0811770fd1e8.png)

> transaction rate: 625 trans/sec


### Understanding

![Screen Shot 1941-11-13 at 9 51 05 PM](https://user-images.githubusercontent.com/14003377/73611327-ef7e4780-4606-11ea-9abc-9d123b175e73.png)
![Screen Shot 1941-11-13 at 9 51 21 PM](https://user-images.githubusercontent.com/14003377/73611328-ef7e4780-4606-11ea-931d-4581f449a514.png)
![Screen Shot 1941-11-13 at 9 53 09 PM](https://user-images.githubusercontent.com/14003377/73611329-ef7e4780-4606-11ea-9c3e-c7f584c4ae97.png)
![Screen Shot 1941-11-13 at 9 53 32 PM](https://user-images.githubusercontent.com/14003377/73611330-f016de00-4606-11ea-93d7-0ea5250471fd.png)
![Screen Shot 1941-11-13 at 9 53 48 PM](https://user-images.githubusercontent.com/14003377/73611331-f016de00-4606-11ea-9a3b-b035758e9b2f.png)
![Screen Shot 1941-11-13 at 9 54 45 PM](https://user-images.githubusercontent.com/14003377/73611332-f016de00-4606-11ea-80d8-bbb08f71c46f.png)

