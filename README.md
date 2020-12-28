# Rosetta TypeScript Client

This package is for making queries to a Rosetta Node or a Rosetta-compliant service.
Read more about Rosetta at [as2-api.org](https://www.as2-api.org/)

All testnet calls are free. To increase your rate limit or make mainnet queries, get a key at [lunar.dev](https://lunar.dev).

All endpoints are Rosetta compliant. Read more about Rosetta at [as2-api.org](https://www.as2-api.org/)

## Installation

NPM
```
npm install @lunarhq/as2-ts-client
```

Yarn
```
yarn add @lunarhq/as2-ts-client
```

## Usage

Create a new client. Both `baseUrl` and `headers` are optional. If no `baseUrl` is provided, the client will default to [lunar.dev](https://lunar.dev).
```ts
import { RosettaClient } from '@lunarhq/as2-ts-client';

/**
 * Initialize Client
 */ 
const baseUrl = 'https://api.lunar.dev/v1';
const headers = {
  'X-Api-Key': 'XXXXXXXXXX'
}
const client = new RosettaClient({baseUrl, headers});

/**
 * Get list of available networks
 */ 
const metadata = {}
const networks = await client.networksList(metadata)
```

### Data Endpoints
You can read more about the Rosetta Data API endpoints at [as2-api.org/docs/data_api_introduction.html](https://www.as2-api.org/docs/data_api_introduction.html)

[Network List](https://www.as2-api.org/docs/NetworkApi.html#networklist)
```
networksList(req: MetadataRequest): Promise<NetworkListResponse>
```

[Network Options](https://www.as2-api.org/docs/NetworkApi.html#networkoptions)
```
networkOptions(req: NetworkRequest): Promise<NetworkOptionsResponse>
```

[Network Status](https://www.as2-api.org/docs/NetworkApi.html#networkstatus)
```
networkOptions(req: NetworkRequest): Promise<NetworkOptionsResponse>
```

[Account Balance](https://www.as2-api.org/docs/AccountApi.html#accountbalance)
```
accountBalance(req: AccountBalanceRequest): Promise<AccountBalanceResponse>
```

[Account Coins](https://www.as2-api.org/docs/AccountApi.html#accountcoins)
```
accountCoins(req: AccountCoinsRequest): Promise<AccountCoinsResponse>
```

[Block](https://www.as2-api.org/docs/BlockApi.html#block)
```
block(req: BlockRequest): Promise<BlockResponse>
```

[Block Transaction](https://www.as2-api.org/docs/BlockApi.html#blocktransaction)
```
blockTransaction(req: BlockTransactionRequest): Promise<BlockTransactionResponse>
```

[Mempool](https://www.as2-api.org/docs/MempoolApi.html#mempool)
```
mempool(req: NetworkRequest): Promise<MempoolResponse>
```

[Mempool Transaction](https://www.as2-api.org/docs/MempoolApi.html#mempooltransaction)
```
mempoolTransaction(req: MempoolTransactionRequest): Promise<MempoolTransactionResponse>
```

### Construction Endpoints
Construction endpoints are used to write to a blockchain. You can read more about the Rosetta Construction API endpoints at [as2-api.org/docs/construction_api_introduction.html](https://www.as2-api.org/docs/construction_api_introduction.html)

[Combine](https://www.as2-api.org/docs/ConstructionApi.html#constructioncombine)
```
combine(req: ConstructionCombineRequest): Promise<ConstructionCombineResponse>
```

[Derive](https://www.as2-api.org/docs/ConstructionApi.html#constructionderive)
```
derive(req: ConstructionDeriveRequest): Promise<ConstructionDeriveResponse>
```

[Hash](https://www.as2-api.org/docs/ConstructionApi.html#constructionhash)
```
hash(req: ConstructionHashRequest): Promise<TransactionIdentifierResponse>
```

[Metadata](https://www.as2-api.org/docs/ConstructionApi.html#constructionmetadata)
```
metadata(req: as2.ConstructionMetadataRequest): Promise<as2.ConstructionMetadataResponse>
```

[Parse](https://www.as2-api.org/docs/ConstructionApi.html#constructionparse)
```
parse(req: as2.ConstructionParseRequest): Promise<as2.ConstructionParseResponse>
```

[Payloads](https://www.as2-api.org/docs/ConstructionApi.html#constructionpayloads)
```
payloads(req: as2.ConstructionPayloadsRequest): Promise<as2.ConstructionPayloadsResponse>
```

[Preprocess](https://www.as2-api.org/docs/ConstructionApi.html#constructionpreprocess)
```
preprocess(req: as2.ConstructionPreprocessRequest): Promise<as2.ConstructionPreprocessResponse>
```

[Submit](https://www.as2-api.org/docs/ConstructionApi.html#constructionsubmit)
```
submit(req: as2.ConstructionSubmitRequest): Promise<as2.TransactionIdentifierResponse>
```
