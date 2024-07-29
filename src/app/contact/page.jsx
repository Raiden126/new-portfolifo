import { Card, CardBody, CardHeader } from "@nextui-org/react";

const Contact = () => {
  return (
    <Card
      isBlurred
      className="flex flex-col lg:flex-row h-auto w-4/5 mx-auto bg-gray-500"
      shadow="sm"
    >
      <div className="basis-1/2">
        <CardHeader className="text-3xl">Send Message</CardHeader>
          <CardBody className="text-white">It's going to be a form</CardBody>
      </div>
      <div className="basis-1/2">
        <CardHeader className="text-3xl">Get In Touch</CardHeader>
      </div>
    </Card>
  );
};

export default Contact;
