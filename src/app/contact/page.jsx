import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import ContactForm from '../../components/ContactForm';
import ContactGetInTouch from '../../components/ContactGetInTouch';

const Contact = () => {
  return (
    <Card
      isBlurred
      className="flex flex-col md:flex-row h-auto w-4/5 lg:w-4/5 mx-auto sm:w-2/3 md:w-11/12 bg-gray-500"
      shadow="sm"
    >
      <div className="basis-1/2">
        <CardHeader className="text-3xl">Send Message</CardHeader>
        <Divider className="w-1/2 ml-4"/>
        <CardBody className="text-white"><ContactForm /></CardBody>
      </div>
      <div className="basis-1/2">
        <CardHeader className="text-3xl">Get In Touch</CardHeader>
        <Divider className="w-1/2 ml-4"/>
        <CardBody className="text-white"><ContactGetInTouch /></CardBody>
      </div>
    </Card>
  );
};

export default Contact;
