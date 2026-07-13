import { useEffect, useState } from "react";

import { educationService } from "../services/educationService";

import type { Education } from "@/types/education";

type Props = {
    open: boolean;

    onClose: () => void;

    onSuccess: () => void;

    education: Education | null;
};

export default function EducationDialog({

    open,

    onClose,

    onSuccess,

    education,

}: Props) {

    const [institution, setInstitution] = useState("");

    const [degree, setDegree] = useState("");

    const [fieldOfStudy, setFieldOfStudy] = useState("");

    const [description, setDescription] = useState("");

    const [startDate, setStartDate] = useState("");

    const [endDate, setEndDate] = useState("");

    const [isCurrent, setIsCurrent] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (!education) {

            setInstitution("");

            setDegree("");

            setFieldOfStudy("");

            setDescription("");

            setStartDate("");

            setEndDate("");

            setIsCurrent(false);

            return;

        }

        setInstitution(education.institution);

        setDegree(education.degree);

        setFieldOfStudy(education.field_of_study);

        setDescription(education.description ?? "");

        setStartDate(education.start_date);

        setEndDate(education.end_date ?? "");

        setIsCurrent(education.is_current);

    }, [education]);

    if (!open) return null;
    return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

        <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

            <h2 className="mb-8 text-2xl font-bold">

                {education ? "Edit Education" : "Add Education"}

            </h2>

            <div className="grid gap-5">

                <input

                    value={institution}

                    onChange={(e) => setInstitution(e.target.value)}

                    placeholder="Institution"

                    className="rounded-xl border p-3"

                />

                <input

                    value={degree}

                    onChange={(e) => setDegree(e.target.value)}

                    placeholder="Degree"

                    className="rounded-xl border p-3"

                />

                <input

                    value={fieldOfStudy}

                    onChange={(e) => setFieldOfStudy(e.target.value)}

                    placeholder="Field of study"

                    className="rounded-xl border p-3"

                />

                <textarea

                    value={description}

                    onChange={(e) => setDescription(e.target.value)}

                    placeholder="Description"

                    rows={4}

                    className="rounded-xl border p-3"

                />

                <div className="grid grid-cols-2 gap-4">

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

                            className="w-full rounded-xl border p-3 disabled:bg-slate-100"

                        />

                    </div>

                </div>

                <label className="flex items-center gap-3">

                    <input

                        type="checkbox"

                        checked={isCurrent}

                        onChange={(e) => setIsCurrent(e.target.checked)}

                    />

                    Current Education

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

                                    institution,

                                    degree,

                                    field_of_study: fieldOfStudy,

                                    description: description || null,

                                    start_date: startDate,

                                    end_date: isCurrent
                                        ? null
                                        : endDate || null,

                                    is_current: isCurrent,

                                    display_order: 0,

                                };

                                if (education) {

                                    await educationService.updateEducation(

                                        education.id,

                                        payload

                                    );

                                } else {

                                    await educationService.createEducation(

                                        payload

                                    );

                                }

                                onSuccess();

                                onClose();

                            } catch (error) {

                                console.error(error);

                                alert("Failed to save education.");

                            } finally {

                                setLoading(false);

                            }

                        }}
                        className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
                    >
                        {loading
                            ? "Saving..."
                            : education
                            ? "Update"
                            : "Create"}
                    </button>

                </div>

            </div>

        </div>

    </div>

);

}