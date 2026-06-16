"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { templeService } from "@/services";
import { Temple } from "@/data/types";
import { PageLoading, NotFoundState } from "@/components/shared";
import {
  TempleHeroDetail,
  TempleInfo,
  TempleSidebar,
  RelatedTemples,
} from "@/components/temples";

export default function TempleDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [temple, setTemple] = useState<Temple | null>(null);
  const [relatedTemples, setRelatedTemples] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTemple() {
      setLoading(true);
      const templeData = await templeService.getById(id);
      if (templeData) {
        setTemple(templeData);
        const related = await templeService.getRelated(id, 4);
        setRelatedTemples(related);
      }
      setLoading(false);
    }
    loadTemple();
  }, [id]);

  if (loading) {
    return <PageLoading variant="temple" />;
  }

  if (!temple) {
    return (
      <NotFoundState
        icon="🛕"
        title="கோவில் கிடைக்கவில்லை"
        description="நீங்கள் தேடும் கோவில் கிடைக்கவில்லை"
        backLink="/"
        backLabel="முகப்புக்கு திரும்பு"
      />
    );
  }

  const deityCategory = templeService.getDeityById(temple.category || "");

  return (
    <div className="min-h-screen bg-white">
      <TempleHeroDetail temple={temple} deityCategory={deityCategory} />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <TempleInfo temple={temple} />
          <TempleSidebar temple={temple} />
        </div>
      </section>

      <RelatedTemples temples={relatedTemples} />
    </div>
  );
}
