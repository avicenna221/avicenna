import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,

} from "@mui/material";

import Blog from "@/lib/models/Blog";
import connect from "@/lib/mongodb";

const getData2 = async () => {
  try {
    await connect();
    const data = await Blog.find();

    if (data) return data;
    else return [];
  } catch (error) {
    return [];
  }
};
export async function generateStaticParams() {
  const data = await getData2();
 
  return data.map((post) => ({ slug: post._id.toString()}));
}
const getData = async (id) => {
  try {
    await connect();
    const data = await Blog.findById(id);
    console.log("mmm", data);
    if (data) return data;
    else return [];
  } catch (error) {
    return [];
  }
};
const NewsDetailPage = async ({ params }) => {
  const data = await getData(params.slug);
  console.log("abxcc", data.bannerPhoto);

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleShareClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "share-popover" : undefined;

  if (!data) {
    return <Typography variant="h4">News not found {params.slug}</Typography>;
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {data.title}
        </Typography>
        <Card>
          {data.bannerPhoto?.url ? (
            <CardMedia
              component="img"
              height="400"
              image={data.bannerPhoto.url}
              alt={data.title}
            />
          ) : null}

          <CardContent>
            <Typography variant="body1">{data.description}</Typography>
            {data.html &&  <div className="p-2" dangerouslySetInnerHTML={{ __html: data.html }} />}
           
            <Typography variant="caption" color="text.secondary">
              Posted on {data.postedDate} by {data.postedBy}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              {/* <IconButton aria-label="like">
                <ThumbUp />
              </IconButton>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                Like
              </Typography> */}
              {/* <IconButton aria-label="share" onClick={handleShareClick}>
                <Share />
              </IconButton> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem>
            <FacebookShareButton
              url={`https://yourwebsite.com/news/${data.slug}`}
              style={{ marginRight: "10px" }}
            >
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </FacebookShareButton>
            <Typography>Facebook</Typography>
          </ListItem>
          <ListItem>
            <TwitterShareButton
              url={`https://yourwebsite.com/news/${data.slug}`}
              style={{ marginRight: "10px" }}
            >
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </TwitterShareButton>
            <Typography>Twitter</Typography>
          </ListItem>
          <ListItem>
            <WhatsappShareButton
              url={`https://yourwebsite.com/news/${data.slug}`}
              style={{ marginRight: "10px" }}
            >
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </WhatsappShareButton>
            <Typography>Whatsapp</Typography>
          </ListItem>
        </List>
      </Popover> */}
    </Container>
  );
};

export default NewsDetailPage;
