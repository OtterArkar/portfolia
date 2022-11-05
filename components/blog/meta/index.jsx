import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  Stack,
  HStack,
  Box,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import readingTime from "reading-time";
import { RWebShare } from "react-web-share";
const Meta = ({ data }) => {
  const bg = useColorModeValue("gray.800", "gray.800");
  return (
    <Box p="4">
      <Box
        px={[8, 14]}
        display="flex"
        flexDir="column"
        gap="4"
        border={"1px"}
        borderColor={"brand.200"}
        backgroundSize="cover"
        transition="all 250ms ease"
        cursor="pointer"
        py={[8, 12]}
        borderRadius={"3em"}
        _hover={{
          borderRadius: "2em",
        }}
      >
        <Heading
          color={bg}
          fontWeight="600"
          fontSize={["3xl", "5xl"]}
          w={["100%", "80%"]}
        >
          {data?.title}
        </Heading>
        <Text fontSize={["xl", "2xl"]} color="gray.500" fontWeight="400">
          {data?.description}
        </Text>
        <HStack fontSize={"sm"} color="gray.800">
          <Text>{dateFormat(data?.createdAt, "mediumDate")}</Text>
          <Text>-</Text>
          <Text>{readingTime(data.content).text}</Text>
        </HStack>
        <Stack direction={"row"} spacing={6} display={["block", "none"]}>
          <RWebShare
            data={{
              text: data?.description,
              url: "https://arkardev.space/blog/${data.slug}",
              title: data?.title,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <FaFacebook color="red.500" style={{ color: "#1a202c" }} />
          </RWebShare>
        </Stack>
        <Stack direction={"row"} spacing={4} display={["none", "block"]} mt="4">
          <FacebookShareButton url={`https://arkardev.space/blog/${data.slug}`}>
            <FaFacebook style={{ color: "#1a202c" }} />
          </FacebookShareButton>
          <LinkedinShareButton url={`https://arkardev.space/blog/${data.slug}`}>
            <FaLinkedin style={{ color: "#1a202c" }} />
          </LinkedinShareButton>
          <TwitterShareButton url={`https://arkardev.space/blog/${data.slug}`}>
            <FaTwitter style={{ color: "#1a202c" }} />
          </TwitterShareButton>
        </Stack>
      </Box>
    </Box>
  );
};
export default Meta;
