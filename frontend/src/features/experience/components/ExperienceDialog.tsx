import { useEffect, useState } from "react";

import { experienceService } from "../services/experienceService";

import type { Experience } from "@/types/experience";

type Props = {
    open: boolean;

    onClose: () => void;

    onSuccess: () => void;

    experience: Experience | null;
};

export default function ExperienceDialog({

    open,

    onClose,

    onSuccess,

    experience,

}: Props) {

    const [company, setCompany] = useState("");

    const [position, setPosition] = useState("");

    const [location, setLocation] = useState("");

    const [description, setDescription] = useState("");

    const [startDate, setStartDate] = useState("");

    const [endDate, setEndDate] = useState("");

    const [isCurrent, setIsCurrent] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!experience) {

            setCompany("");
            setPosition("");
            setLocation("");
            setDescription("");
            setStartDate("");
            setEndDate("");
            setIsCurrent(false);

            return;

        }

        setCompany(experience.company);

        setPosition(experience.position);

        setLocation(experience.location ?? "");

        setDescription(experience.description ?? "");

        setStartDate(experience.start_date);

        setEndDate(experience.end_date ?? "");

        setIsCurrent(experience.is_current);

    }, [experience]);

    if (!open) return null;
        return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

            <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

                <h2 className="mb-8 text-2xl font-bold">

                    {experience ? "Edit Experience" : "Add Experience"}

                </h2>

                <div className="grid gap-5">

                    <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                        className="rounded-xl border p-3"
                    />

                    <input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Position"
                        className="rounded-xl border p-3"
                    />

                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="rounded-xl border p-3"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        rows={5}
                        className="rounded-xl border p-3"
                    />

                    <div className="grid gap-4 md:grid-cols-2">

                        <div>

                            <label className="mb-2 block text-sm font-medium">

                                Start Date

                            </label>

                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full rounded-xl border p-3"
                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-medium">

                                End Date

                            </label>

                            <input
                                type="date"
                                value={endDate}
                                disabled={isCurrent}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full rounded-xl border p-3 disabled:opacity-50"
                            />

                        </div>

                    </div>

                    <label className="flex items-center gap-3">

                        <input
                            type="checkbox"
                            checked={isCurrent}
                            onChange={(e) => setIsCurrent(e.target.checked)}
                        />

                        <span>

                            I currently work here

                        </span>

                    </label>

                    <div className="mt-6 flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border px-5 py-3"
                        >
                            Cancel
                        </button>
                                                <button
                            type="button"
                            disabled={loading}
                            onClick={async () => {

                                try {

                                    setLoading(true);

                                    const payload = {

                                        company,

                                        position,

                                        location: location || null,

                                        description: description || null,

                                        start_date: startDate,

                                        end_date: isCurrent
                                            ? null
                                            : endDate || null,

                                        is_current: isCurrent,

                                        display_order: 0,

                                    };

                                    if (experience) {

                                        await experienceService.updateExperience(

                                            experience.id,

                                            payload

                                        );

                                    } else {

                                        await experienceService.createExperience(

                                            payload

                                        );

                                    }

                                    onSuccess();

                                    onClose();

                                } catch (error) {

                                    console.error(error);

                                    alert("Failed to save experience.");

                                } finally {

                                    setLoading(false);

                                }

                            }}
                            className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                        >
                            {loading
                                ? "Saving..."
                                : experience
                                ? "Update"
                                : "Create"}
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}