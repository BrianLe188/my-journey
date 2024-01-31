/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button, Timeline as FlowTimeline } from "flowbite-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type Timeline } from "@/utils/types";

export default function Timeline() {
  const { key } = useParams();
  const [timeline, setTimeline] = useState<Timeline[]>([]);

  useEffect(() => {
    getTimeline();
  }, [key]);

  async function getTimeline() {
    try {
      const res = await fetch(`/data/${key}.json`);
      const data = await res.json();
      setTimeline(data);
    } catch (error) {}
  }

  return (
    <FlowTimeline>
      {timeline.map((item) => (
        <FlowTimeline.Item key={item.id}>
          <FlowTimeline.Point />
          <FlowTimeline.Content>
            <FlowTimeline.Time>{item.date}</FlowTimeline.Time>
            <FlowTimeline.Title>{item.title}</FlowTimeline.Title>
            {item.content && (
              <FlowTimeline.Body>
                <div className="p-2 border border-gray-100 rounded-md">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="leading-8 timeline"
                  ></div>
                  <Button className="w-full bg-transparent text-gray-400 hover:!bg-gray-100">
                    View more
                  </Button>
                </div>
              </FlowTimeline.Body>
            )}
          </FlowTimeline.Content>
        </FlowTimeline.Item>
      ))}
    </FlowTimeline>
  );
}
