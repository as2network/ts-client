import axios from "axios";
import * as as2 from "./types/as2";
import * as utils from "./utils";

interface RosettaClientParams {
  baseUrl: string;
  headers?: {
    [key: string]: string;
  };
}

export class RosettaClient {
  _baseUrl: string;
  _headers: { [key: string]: string };

  constructor(params: RosettaClientParams) {
    this._baseUrl = params?.baseUrl;
    this._headers = params?.headers ?? {};
  }

  /**********************************************
   ** Data Endpoints
   **********************************************/

  accountBalance = async (
    req: as2.AccountBalanceRequest
  ): Promise<as2.AccountBalanceResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/account/balance`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.AccountBalanceResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  accountCoins = async (
    req: as2.AccountCoinsRequest
  ): Promise<as2.AccountCoinsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/account/coins`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.AccountCoinsResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  block = async (req: as2.BlockRequest): Promise<as2.BlockResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/block`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.BlockResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  blockTransaction = async (
    req: as2.BlockTransactionRequest
  ): Promise<as2.BlockTransactionResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/block/transaction`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.BlockTransactionResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networksList = async (
    req: as2.MetadataRequest
  ): Promise<as2.NetworkListResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/list`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const lunarRes: as2.NetworkListResponse = response.data;
      return lunarRes;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networkOptions = async (
    req: as2.NetworkRequest
  ): Promise<as2.NetworkOptionsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/options`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.NetworkOptionsResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  networkStatus = async (
    req: as2.NetworkRequest
  ): Promise<as2.NetworkStatusResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/network/status`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.NetworkStatusResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  mempool = async (
    req: as2.NetworkRequest
  ): Promise<as2.MempoolResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/mempool`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.MempoolResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  mempoolTransaction = async (
    req: as2.MempoolTransactionRequest
  ): Promise<as2.MempoolTransactionResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/mempool/transaction`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.MempoolTransactionResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**********************************************
   ** Construction Endpoints
   **********************************************/

  combine = async (
    req: as2.ConstructionCombineRequest
  ): Promise<as2.ConstructionCombineResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/combine`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.ConstructionCombineResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  derive = async (
    req: as2.ConstructionDeriveRequest
  ): Promise<as2.ConstructionDeriveResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/derive`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.ConstructionDeriveResponse = response.data;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  hash = async (
    req: as2.ConstructionHashRequest
  ): Promise<as2.TransactionIdentifierResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/hash`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.TransactionIdentifierResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  metadata = async (
    req: as2.ConstructionMetadataRequest
  ): Promise<as2.ConstructionMetadataResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/metadata`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.ConstructionMetadataResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  parse = async (
    req: as2.ConstructionParseRequest
  ): Promise<as2.ConstructionParseResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/parse`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.ConstructionParseResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  payloads = async (
    req: as2.ConstructionPayloadsRequest
  ): Promise<as2.ConstructionPayloadsResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/payloads`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.ConstructionPayloadsResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  preprocess = async (
    req: as2.ConstructionPreprocessRequest
  ): Promise<as2.ConstructionPreprocessResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/preprocess`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.ConstructionPreprocessResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  submit = async (
    req: as2.ConstructionSubmitRequest
  ): Promise<as2.TransactionIdentifierResponse> => {
    try {
      const response = await axios.post(
        `${this._baseUrl}/construction/submit`,
        req,
        utils.setCustomHeaders(this._headers)
      );
      const data: as2.TransactionIdentifierResponse = response.data;

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
