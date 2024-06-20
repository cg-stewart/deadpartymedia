import { useContentfulInspectorMode } from "@contentful/live-preview/react";

import { CtfRichText } from "@/components/contentful/CtfRichText";
import { PageBlogPostFieldsFragment } from "@src/lib/__generated/sdk";

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { content } = article;
  const inspectorProps = useContentfulInspectorMode({
    entryId: article.sys.id,
  });

  return (
    <div {...inspectorProps({ fieldId: "content" })}>
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};
