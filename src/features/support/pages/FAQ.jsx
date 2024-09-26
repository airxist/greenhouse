import React from "react";
import {
  AccordionSheet,
  AccordionBody,
  AccordionLabel,
  AccordionTrigger,
  AccordionContent,
} from "../../../shared/components/Accordion";
import Btn from "../../../shared/components/Btn";
import { faq } from "../../../constants";

const FAQ = () => {
  return (
    <section className="px-5 md:px-[112px]">
      <div
        className="md:h-[832px] w-full"
        style={{
          background:
            "transparent url('/hero_bg/faq-hero.svg') no-repeat right top",
        }}
      >
        <div className="bg-foundation-grey max-w-[622px] mt-5">
          <div>
            <AccordionSheet>
              <AccordionLabel
                label="Frequently Asked Questions"
                className="font-bold text-[2rem]"
              />

              {faq.map((item) => {
                return (
                  <AccordionBody
                    className="mt-3"
                    triggerChild={<Btn text={item.question} />}
                    triggerClass="h-14 border text-xl font-bold"
                    content={<div>{item.answer}</div>}
                  />
                );
              })}
            </AccordionSheet>
          </div>

          <div className="mt-20">
            <p>
              Didn't find the answer you were looking for? Contact our support
              team, we're here to help!
            </p>
            <Btn text="Contact Support" className="rounded-[8px] bg-fysi-green text-white flex-center mt-5 h-14 w-[249px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
