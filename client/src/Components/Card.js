import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function BasicCardExample() {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg  />
      <CardBody>
        <CardTitle> </CardTitle>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
  );
}