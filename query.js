// const axios = require('axios');
import axios from "axios";
const uniswapURL = "https://api.studio.thegraph.com/query/43306/gld-token-wallet-app/v0.0.1" ; // https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2
let minBlockV = 0
const query = `
query GetProtocol($minBlock: Int!) {
    tokenTransfers(first: 5, orderBy: blockTimestamp, orderDirection: desc) {
        id
        from
        to
        value
        transactionHash
        blockNumber
        blockTimestamp
      }
    _meta {
        block {
            number
        }
    }
}`

const query2 = `
{
   tokenTransfers(first: 5, orderBy: blockTimestamp, orderDirection: desc) {
    id
    from
    to
    value
    transactionHash
    blockNumber
    blockTimestamp
  }
} 
`


const main = async () =>{
    try {
        const result = await axios.post(
            uniswapURL,
            {
                query:query,
                variables: {minBlock: minBlockV}
            }
            );           
            console.log ("Query result: \n", result.data.data);
    } catch (err){
        console.log(err);
    }

}
main()