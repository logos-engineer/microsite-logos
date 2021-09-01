const fetcher = (url: string): Promise<any> =>
  fetch(url).then(async (res) => {
    if (!res.ok) {
      const infoError = await res.json();
      throw new Error(infoError.message);
    }

    return res.json();
  });

export default fetcher;
