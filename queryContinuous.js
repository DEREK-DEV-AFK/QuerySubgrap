import axios from "axios";
const uniswapURL = "https://api.studio.thegraph.com/query/43306/gld-token-wallet-app/v0.0.1" ; 

/// known value in a loop by fetching it using The Graph.
async function updateProtocolPaused() {
    // It's ok to start with minBlock at 0. The query will be served
    // using the latest block available. Setting minBlock to 0 is the
    // same as leaving out that argument.
    let minBlock = 0
  
    for (;;) {
      // Schedule a promise that will be ready once
      // the next Ethereum block will likely be available.
      const nextBlock = new Promise((f) => {
        setTimeout(f, 14000)
      })
  
      const query = `
          query GetProtocol($minBlock: Int!) {
            tokenTransfers(block: { number_gte: $minBlock }, first: 5, orderBy: blockTimestamp, orderDirection: desc) {
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
  
      // const variables = { minBlock }
      const response = await axios.post(
        uniswapURL,
        {
            query:query,
            variables: {minBlock: minBlock}
        }
        );  
      minBlock = response.data.data._meta.block.number
  
      // TODO: Do something with the response data here instead of logging it.
      console.log(response.data.data.tokenTransfers[0])
  
      // Sleep to wait for the next block
      await nextBlock
    }
  }

  updateProtocolPaused()