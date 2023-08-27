const useTopics = async () => {
  try {
    const res = await fetch("https://nextjs-crud-swart.vercel.app/api/topics",{
        cache:"no-cache",
    });

    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default useTopics;
