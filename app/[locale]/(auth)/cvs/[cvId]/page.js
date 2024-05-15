"use client"

import Content from "@/Components/Admin/CV/contentCv/Content"
import CvPage from "@/Components/Admin/CV/infoCv/CvPage"
import PageHead from "@/Components/utils/PageHead/PageHead"
import React from "react"
import { useState, useEffect } from "react"

export default function CVPage({params}) {
  const [cvData, setCvData] = useState(null)

  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await fetch(`https://mahercp.net/dashboard/api/cv/${params.cvId}`)
        const data = await response.json()
        setCvData(data)
        // console.log(data)
      } catch (error) {
        console.error("Failed to fetch CV data:", error)
      }
    }

    fetchCvData();
  }, [])

  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "",
    },
    {
      id: "02",
      link: "/cvs",
      titleAr: "طلبات التوظيف /",
      titleEn: "",
    },
    {
      id: "03",
      link: `/cvs/${params.cvId}`,
      titleAr: "السيرة الذاتية",
      titleEn: "",
    },
  ];
  return (
    <div>
      <PageHead pageTitle="السيرة الذاتية" links={linksList} />
      <CvPage cvData={cvData} />
      <Content cvData={cvData} />
    </div>
  )
}
