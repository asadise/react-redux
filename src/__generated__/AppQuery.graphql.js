/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +countries: $ReadOnlyArray<{|
    +name: string,
    +native: string,
    +phone: string,
    +capital: ?string,
    +currency: ?string,
    +emoji: string,
    +languages: $ReadOnlyArray<{|
      +name: ?string
    |}>,
    +states: $ReadOnlyArray<{|
      +name: string
    |}>,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  countries {
    name
    native
    phone
    capital
    currency
    emoji
    languages {
      name
    }
    states {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "countries",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "native",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "capital",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "currency",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "emoji",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Language",
        "kind": "LinkedField",
        "name": "languages",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "State",
        "kind": "LinkedField",
        "name": "states",
        "plural": true,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "68b6dad8b774c183ad29152c0c9b55bc",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  countries {\n    name\n    native\n    phone\n    capital\n    currency\n    emoji\n    languages {\n      name\n    }\n    states {\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1b0c8d3b98ec49c57ecbebe057f3740';

module.exports = node;
