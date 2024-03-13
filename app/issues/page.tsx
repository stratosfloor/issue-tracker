"use client";

import { Button } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Issue } from "@prisma/client";

const IssuesPage = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const getIssues = async () => {
    axios
      .get("/api/issues")
      .then(function (response) {
        setIssues(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <ul className="mt-5">
        {issues.map((issue) => (
          <li key={issue.id} className="my-2">
            <div className="border border-blue-400 flex-col w-96 p-2">
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuesPage;
