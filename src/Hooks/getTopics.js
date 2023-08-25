const useTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics",{
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
