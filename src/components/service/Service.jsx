import React from "react";
import "./Service.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

const Service = () => {
  const service = [
    {
      id: 1,
      title: "FREE SHIPPING WORLDWIDE",
      para: "Free shipping in the world",
      icon: MdOutlineLocalShipping,
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SUPPORT",
      para: "Service Support 24/7",
      icon: IoHeartCircleOutline,
    },
    {
      id: 3,
      title: "MONEY BACK CUARANTEE",
      para: "Money Back - 7 Days",
      icon: MdOutlineSettingsBackupRestore,
    },
  ];
  return (
    <div className="services">
      <div className="service">
        {service.map((service) => {
          return (
            <div className="service-details" key={service.id}>
              <service.icon className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
