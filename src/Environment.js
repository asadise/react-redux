import { Environment, Network, RecordSource, Store, } from 'relay-runtime'

const API_ENDPOINT = 'https://countries.trevorblades.com/'

function fetchQuery(
    operation,
    variables,
) {
    return fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
})

export default environment