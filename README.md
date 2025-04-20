## React Native (Expo go, Recommand react native cli)

- Init project with ts `npx create-expo-app@latest <appname> --template`
- Run project `yarn start`
- Key to generate react-native structure type key `rnf`
- expo icon `https://icons.expo.fyi/Index`

### Mock API

- Generate Mock API `https://mockapi.io`
- Mock API Project Link [here](https://mockapi.io/clone/6803c85e79cb28fb3f59a87f) `https://mockapi.io/clone/6803c85e79cb28fb3f59a87f`

### Example how to list data in log as JSON

```bash
const endpointURL = `https://6803c85e79cb28fb3f59a87e.mockapi.io/book`;
  const getAll = async () => {
    const res = await axios.get<any>(endpointURL);
    console.log(JSON.stringify(res.data, null, 3));
  };
```
