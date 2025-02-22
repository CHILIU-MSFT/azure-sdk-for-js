/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  MediaservicesImpl,
  PrivateLinkResourcesImpl,
  PrivateEndpointConnectionsImpl,
  LocationsImpl,
  AccountFiltersImpl,
  AssetsImpl,
  AssetFiltersImpl,
  ContentKeyPoliciesImpl,
  TransformsImpl,
  JobsImpl,
  StreamingPoliciesImpl,
  StreamingLocatorsImpl,
  LiveEventsImpl,
  LiveOutputsImpl,
  StreamingEndpointsImpl
} from "./operations";
import {
  Operations,
  Mediaservices,
  PrivateLinkResources,
  PrivateEndpointConnections,
  Locations,
  AccountFilters,
  Assets,
  AssetFilters,
  ContentKeyPolicies,
  Transforms,
  Jobs,
  StreamingPolicies,
  StreamingLocators,
  LiveEvents,
  LiveOutputs,
  StreamingEndpoints
} from "./operationsInterfaces";
import { AzureMediaServicesOptionalParams } from "./models";

export class AzureMediaServices extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the AzureMediaServices class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The unique identifier for a Microsoft Azure subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureMediaServicesOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureMediaServicesOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-mediaservices/1.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-06-01";
    this.operations = new OperationsImpl(this);
    this.mediaservices = new MediaservicesImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.locations = new LocationsImpl(this);
    this.accountFilters = new AccountFiltersImpl(this);
    this.assets = new AssetsImpl(this);
    this.assetFilters = new AssetFiltersImpl(this);
    this.contentKeyPolicies = new ContentKeyPoliciesImpl(this);
    this.transforms = new TransformsImpl(this);
    this.jobs = new JobsImpl(this);
    this.streamingPolicies = new StreamingPoliciesImpl(this);
    this.streamingLocators = new StreamingLocatorsImpl(this);
    this.liveEvents = new LiveEventsImpl(this);
    this.liveOutputs = new LiveOutputsImpl(this);
    this.streamingEndpoints = new StreamingEndpointsImpl(this);
  }

  operations: Operations;
  mediaservices: Mediaservices;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
  locations: Locations;
  accountFilters: AccountFilters;
  assets: Assets;
  assetFilters: AssetFilters;
  contentKeyPolicies: ContentKeyPolicies;
  transforms: Transforms;
  jobs: Jobs;
  streamingPolicies: StreamingPolicies;
  streamingLocators: StreamingLocators;
  liveEvents: LiveEvents;
  liveOutputs: LiveOutputs;
  streamingEndpoints: StreamingEndpoints;
}
