# Query Data From Subgraph 
In following projects includes two files for diffrent purposes
1. `query.js` - Runs only one time and quries all the data
2. `queryContinuous.js` - Runs continuosly and wait for 14sec after quering again

## Dependecies
Well there are many was of querying data from subgraph, but i have use https endpoint way with `axios`.
- axios

## Steps to run 
1. Install all the dependencies 
    ```
    npm install
    ```
2. Adding you subgraph https endpoint in both files 
    ```
    const uniswapURL =  <-Change-It-Here->
    ```
3. Changing schema accordingly, depending upon what data to get
    NOTE : _meta in schema is to get the current block in file `queryContinous.js`
4. Running it 
    ```
    node <FileName>
    ```
    
## Author
Sufiyan