import BlogItem from "../../components/BlogItem";
import Container from "../../components/Container";

export default function Blog() {
  return (
    <Container>
      <h1 className="pl-6">Blog</h1>
      <BlogItem
        title="20220826 - Quitters"
        description="A roadtrip through my past and present perspectives on making music,
        being a musician, finding meaning in that, and losing meaning in that.
        Undertones of DAW hatred."
      />
    </Container>
  );
}
