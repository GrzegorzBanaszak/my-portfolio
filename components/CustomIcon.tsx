import CsharpIcon from "@/icons/CsharpIcon";
import CssIcon from "@/icons/CssIcon";
import DockerIcon from "@/icons/DockerIcon";
import FramerIcon from "@/icons/FramerIcon";
import HtmlIcon from "@/icons/HtmlIcon";
import Javascript from "@/icons/Javascript";
import MongoIcon from "@/icons/MongoIcon";
import MysqlIcon from "@/icons/MysqlIcon";
import NestjsIcon from "@/icons/NestjsIcon";
import NextIcon from "@/icons/NextIcon";
import NodeIcon from "@/icons/NodeIcon";
import PrismaIcon from "@/icons/PrismaIcon";
import ReactIcon from "@/icons/ReactIcon";
import ReactRouterIcon from "@/icons/ReactRouterIcon";
import ReduxIcon from "@/icons/ReduxIcon";
import SassIcon from "@/icons/SassIcon";
import StyledComponentsIcon from "@/icons/StyledComponentsIcon";
import TypescriptIcon from "@/icons/TypescriptIcon";
import VueIcon from "@/icons/VueIcon";
import React, { FC } from "react";

type CustomIconProps = {
  type: string;
};

const CustomIcon: FC<CustomIconProps> = ({ type }) => {
  switch (type) {
    case "javascript":
      return <Javascript />;
    case "react":
      return <ReactIcon />;
    case "html":
      return <HtmlIcon />;
    case "css":
      return <CssIcon />;
    case "sass":
      return <SassIcon />;
    case "framer":
      return <FramerIcon />;
    case "redux":
      return <ReduxIcon />;
    case "react-router":
      return <ReactRouterIcon />;
    case "node":
      return <NodeIcon />;
    case "typescript":
      return <TypescriptIcon />;
    case "vue":
      return <VueIcon />;
    case "mongo":
      return <MongoIcon />;
    case "csharp":
      return <CsharpIcon />;
    case "docker":
      return <DockerIcon />;
    case "mysql":
      return <MysqlIcon />;
    case "nestjs":
      return <NestjsIcon />;
    case "prisma":
      return <PrismaIcon />;
    case "nextjs":
      return <NextIcon />;
    case "styled-components":
      return <StyledComponentsIcon />;
    default:
      return <Javascript />;
  }
};

export default CustomIcon;
