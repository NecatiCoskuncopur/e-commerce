import { useParams } from 'react-router-dom';

import { news } from 'data';
import { NewsDetailsContent, PageBanner } from 'components';

const NewsDetail = () => {
  const { id } = useParams();

  const item = news.find((item) => item?.id === Number(id));
  return (
    <>
      <PageBanner title="News Detail" />
      <NewsDetailsContent item={item} />
    </>
  );
};

export default NewsDetail;
