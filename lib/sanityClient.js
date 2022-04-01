import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'w3qjaqyu',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skcJ4xyjnz6EmLaUM91QPggv7nkAOfiMDXzCiaAxptjVh9YULiSa9LR0nuGQNHQ6EOxGWc9wos6e5ouUrLF2Dsu5W6pu2OJSRzzbIUjmqEwsik01YrZftFNasTiefWMSgqKbnFtUQQygVu4LOB9wvc4K9KRw2sXDxxm7vExAbSp1860TcuTP',
  useCdn: false,
})