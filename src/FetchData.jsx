import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: "mhms9uzxftj2",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchData = () => {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projectFetch = async () => {
    try {
      const { items } = await client.getEntries({ content_type: "cmsProject" });
      const data = items.map((item) => {
        const { name, url, image } = item.fields;
        const img = image.fields.file.url;
        const id = item.sys.id;
        return { name, url, img, id };
      });
      setProjectList(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    projectFetch();
  }, []);
  return { projectList, isLoading };
};

export default useFetchData;
