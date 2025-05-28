"use client";
import { ReactNode, useState } from "react";
import {
  Search,
  Calendar as CalendarIcon,
  Clock,
  ChevronDown,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { eventService } from "@/app/services/eventService";
// import { Switch } from "@headlessui/react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  onSave: (event: Event) => void;
  children?: ReactNode;
}

export default function DrawerSchedule({ open, onClose, onSave }: DrawerProps) {
  // Form state (for demo)
  const [repeat, setRepeat] = useState("none");
  const [colorOpen, setColorOpen] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(
    new Date(2024, 3, 9, 8, 0)
  );
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date(2024, 3, 9));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dailyTime, setDailyTime] = useState<Date | null>(
    new Date(2024, 3, 9, 8, 0)
  );
  const [showDailyTimePicker, setShowDailyTimePicker] = useState(false);
  const [weeklyDays, setWeeklyDays] = useState<number[]>([]); // 0=Sun, 1=Mon, ...
  const weekLabels = ["M", "T", "W", "T", "F", "S", "S"];
  const [instructor, setInstructor] = useState("");
  const [classPax, setClassPax] = useState(9);
  const [waitlist, setWaitlist] = useState(2);
  // const [allowClassPass, setAllowClassPass] = useState(false);
  // const [setPrivate, setSetPrivate] = useState(false);
  const [publish, setPublish] = useState("now");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [classTitle, setClassTitle] = useState("");

  const handleToggleDay = (idx: number) => {
    setWeeklyDays((prev) =>
      prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx]
    );
  };

  const handleSave = async () => {
    try {
      const eventData = {
        title: classTitle,
        start_time: new Date(
          startDate?.getFullYear() ?? 2024,
          startDate?.getMonth() ?? 0,
          startDate?.getDate() ?? 1,
          startTime?.getHours() ?? 8,
          startTime?.getMinutes() ?? 0
        ).toISOString(),
        end_time: new Date(
          startDate?.getFullYear() ?? 2024,
          startDate?.getMonth() ?? 0,
          startDate?.getDate() ?? 1,
          (startTime?.getHours() ?? 8) + 1,
          startTime?.getMinutes() ?? 0
        ).toISOString(),
        instructor,
        class_pax: classPax,
        waitlist,
        color: "#00bfae", // or your color picker value
        repeat,
        repeat_days: repeat === "weekly" ? weeklyDays : null,
      };

      const savedEvent = await eventService.createEvent(eventData);
      onSave(savedEvent);
      onClose();
    } catch (error) {
      // Handle error (show toast, etc.)
      console.error("Failed to save event:", error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" onClick={onClose} />
      {/* Drawer */}
      <div className="ml-auto w-1/2 bg-white h-full shadow-lg p-8 relative z-10 flex flex-col overflow-y-auto max-h-screen">
        <button
          className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-8">Add schedule</h2>
        {/* Class input */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Class</label>
          <div className="relative">
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 pr-10 text-base"
              placeholder="Hot Yoga"
              defaultValue="Hot Yoga"
              value={classTitle}
              onChange={(e) => setClassTitle(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
        {/* Display name checkbox */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="displayName" className="mr-2" />
          <label htmlFor="displayName" className="text-sm">
            Use a different display name
          </label>
        </div>
        {/* Start date */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Start date</label>
          <div className="relative">
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 pr-10 text-base cursor-pointer"
              placeholder="09/04/2024"
              value={startDate ? startDate.toLocaleDateString("en-GB") : ""}
              readOnly
              onClick={() => setShowDatePicker((v) => !v)}
            />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            {showDatePicker && (
              <div className="absolute left-0 top-full mt-2 z-20">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setShowDatePicker(false);
                  }}
                  dateFormat="dd/MM/yyyy"
                  inline
                />
              </div>
            )}
          </div>
        </div>
        {/* Start time and duration */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Start time</label>
            <div className="relative">
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 pr-10 text-base cursor-pointer"
                placeholder="08:00 AM"
                value={
                  startTime
                    ? startTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })
                    : ""
                }
                readOnly
                onClick={() => setShowTimePicker((v) => !v)}
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              {showTimePicker && (
                <div className="absolute left-0 top-full mt-2 z-20">
                  <DatePicker
                    selected={startTime}
                    onChange={(date) => {
                      setStartTime(date);
                      setShowTimePicker(false);
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    inline
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">Duration</label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 text-base bg-gray-100"
                value="60"
                disabled
              />
              <span className="ml-2 text-gray-400">minutes</span>
            </div>
          </div>
        </div>
        {/* Calendar color */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Calendar color</label>
          <button
            type="button"
            className="w-16 h-12 border rounded-lg flex items-center justify-center relative"
            onClick={() => setColorOpen((v) => !v)}
          >
            <span className="w-6 h-6 rounded-full bg-teal-400 border" />
            <ChevronDown className="ml-2 text-gray-400 w-4 h-4" />
            {/* Color dropdown (demo only) */}
            {colorOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white border rounded shadow p-2 z-10 flex gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-400 border cursor-pointer" />
                <span className="w-6 h-6 rounded-full bg-pink-400 border cursor-pointer" />
                <span className="w-6 h-6 rounded-full bg-yellow-400 border cursor-pointer" />
              </div>
            )}
          </button>
        </div>
        {/* Repeat rules */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Repeat rules</label>
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="repeat"
                checked={repeat === "none"}
                onChange={() => setRepeat("none")}
              />
              Doesn&apos;t repeat
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="repeat"
                checked={repeat === "daily"}
                onChange={() => setRepeat("daily")}
              />
              Daily
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="repeat"
                checked={repeat === "weekly"}
                onChange={() => setRepeat("weekly")}
              />
              Weekly
            </label>
            {/* Daily time picker */}
            {repeat === "daily" && (
              <div className="mt-4">
                <label className="block font-medium mb-1">Time</label>
                <div className="relative w-40">
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2 text-base cursor-pointer"
                    value={
                      dailyTime
                        ? dailyTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                        : ""
                    }
                    readOnly
                    onClick={() => setShowDailyTimePicker((v) => !v)}
                  />
                  {showDailyTimePicker && (
                    <div className="absolute left-0 top-full mt-2 z-20">
                      <DatePicker
                        selected={dailyTime}
                        onChange={(date) => {
                          setDailyTime(date);
                          setShowDailyTimePicker(false);
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        inline
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Weekly day picker */}
            {repeat === "weekly" && (
              <div className="flex gap-2 mt-4">
                {weekLabels.map((label, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`w-12 h-12 rounded-lg border flex items-center justify-center text-lg font-semibold transition-colors
                    ${
                      weeklyDays.includes(idx)
                        ? "bg-black text-white"
                        : "bg-white text-black border-gray-300"
                    }
                  `}
                    onClick={() => handleToggleDay(idx)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Class Details */}
        <div className="mt-8 border-t pt-8">
          <h3 className="text-lg font-bold mb-4">Class Details</h3>
          {/* Instructor */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Instructor</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 text-base"
              placeholder="Instructor name"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
            />
          </div>
          {/* Class pax and Waitlist */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Class pax</label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="w-full border rounded-lg px-4 py-2 text-base pr-10"
                  value={classPax}
                  min={1}
                  onChange={(e) => setClassPax(Number(e.target.value))}
                />
                <span className="absolute right-3 text-gray-400">pax</span>
              </div>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">
                Waitlist (Optional)
              </label>
              <div className="relative flex items-center gap-2">
                <button
                  type="button"
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-lg font-bold bg-gray-100 hover:bg-gray-200"
                  onClick={() => setWaitlist((w) => Math.max(0, w - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 border rounded-lg px-2 py-2 text-base text-center"
                  value={waitlist}
                  min={0}
                  onChange={(e) => setWaitlist(Number(e.target.value))}
                />
                <button
                  type="button"
                  className="w-8 h-8 rounded-full border flex items-center justify-center text-lg font-bold bg-gray-100 hover:bg-gray-200"
                  onClick={() => setWaitlist((w) => w + 1)}
                >
                  +
                </button>
                <span className="text-gray-400 ml-2">pax</span>
              </div>
            </div>
          </div>
          {/* Options */}
          {/* <div className="border-t my-6 pt-6">
            <h4 className="font-bold mb-4">Options</h4>
            <div className="flex flex-col gap-4">
              <Switch.Group as="div" className="flex items-center gap-3">
                <Switch
                  checked={allowClassPass}
                  onChange={setAllowClassPass}
                  className={`${
                    allowClassPass ? "bg-indigo-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                  <span
                    className={`${
                      allowClassPass ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
                <Switch.Label className="font-medium">
                  Allow booking on ClassPass
                </Switch.Label>
              </Switch.Group>
              <Switch.Group as="div" className="flex items-center gap-3">
                <Switch
                  checked={setPrivate}
                  onChange={setSetPrivate}
                  className={`${
                    setPrivate ? "bg-indigo-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                  <span
                    className={`${
                      setPrivate ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
                <Switch.Label className="font-medium">
                  Set as private
                </Switch.Label>
              </Switch.Group>
            </div>
          </div> */}
          {/* Publish schedule */}
          <div className="border-t my-6 pt-6">
            <h4 className="font-bold mb-4">Publish schedule</h4>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publish"
                  checked={publish === "now"}
                  onChange={() => setPublish("now")}
                />
                Publish now
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publish"
                  checked={publish === "later"}
                  onChange={() => setPublish("later")}
                />
                Publish later
              </label>
              {publish === "later" && (
                <input
                  type="text"
                  className="w-48 border rounded-lg px-4 py-2 text-base mt-2 text-gray-400 bg-gray-100"
                  value="Set visibility date"
                  disabled
                />
              )}
            </div>
          </div>
          {/* Advanced Settings */}
          <div className="border-t my-6 pt-6">
            <button
              type="button"
              className="flex items-center gap-2 font-bold text-base"
              onClick={() => setShowAdvanced((v) => !v)}
            >
              Advanced Settings
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAdvanced ? "rotate-180" : ""
                }`}
              />
            </button>
            {showAdvanced && (
              <div className="mt-2 text-gray-500 text-sm">
                Set customised settings only for this class
              </div>
            )}
          </div>
          {/* Save/Cancel buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              className="border border-[#355c4a] text-[#355c4a] hover:cursor-pointer rounded-full px-8 py-2 font-semibold text-base bg-white hover:bg-indigo-50 transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-[#355c4a] text-white rounded-full px-8 py-2 font-semibold text-base shadow hover:cursor-pointer hover:bg-[#355c4a]/80 transition-colors"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
