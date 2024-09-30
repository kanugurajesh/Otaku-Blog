import { getMDXComponent } from "next-contentlayer2/hooks";

interface MdxProps {
  code: string;
}

export default function Mdx({ code }: MdxProps) {
  const Content = getMDXComponent(code);
  return <Content />;
}
