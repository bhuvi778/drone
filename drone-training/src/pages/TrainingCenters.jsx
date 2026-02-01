import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const TrainingCenters = () => {
    const centers = [
        {
            name: "UAV PILOT ACADEMY – Udgir",
            address: "Ganesh Commercial Complex, 1st Floor",
            addressLine2: "Near JK Super Market, Jalkot Road",
            city: "Udgir, Latur District",
            state: "Maharashtra",
            pincode: "413517",
            phone: "+91 98765 43210",
            email: "udgir@uavpilotacademy.com",
            timing: "Mon - Sat: 9:00 AM - 6:00 PM",
            mapLink: "#",
            color: "from-cyan-500 to-blue-500"
        },
        {
            name: "UAV Pilot Academy – Borivali West",
            address: "Chandralok CHS",
            addressLine2: "Opp. Tanishq Showroom",
            city: "Borivali West, Mumbai",
            state: "Maharashtra",
            pincode: "400092",
            phone: "+91 98765 43211",
            email: "borivali@uavpilotacademy.com",
            timing: "Mon - Sat: 9:00 AM - 6:00 PM",
            mapLink: "#",
            color: "from-blue-500 to-indigo-500"
        },
        {
            name: "UAV PILOT ACADEMY – Bhopal",
            address: "Sai Ram Complex, R-22",
            addressLine2: "Opposite Railway Lines, Purshottam Eastend, Zone-II",
            city: "MP Nagar, Bhopal",
            state: "Madhya Pradesh",
            pincode: "462011",
            phone: "+91 98765 43212",
            email: "bhopal@uavpilotacademy.com",
            timing: "Mon - Sat: 9:00 AM - 6:00 PM",
            mapLink: "#",
            color: "from-indigo-500 to-purple-500"
        },
        {
            name: "UAV PILOT ACADEMY – Pune",
            address: "Panshet Road, Manerwadi",
            addressLine2: "Khanapur Naka",
            city: "Pune",
            state: "Maharashtra",
            pincode: "411025",
            phone: "+91 98765 43213",
            email: "pune@uavpilotacademy.com",
            timing: "Mon - Sat: 9:00 AM - 6:00 PM",
            mapLink: "#",
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "UAV PILOT ACADEMY – Neral",
            address: "Gudhavan, Antrat T. Waredi",
            addressLine2: "Neral",
            city: "Neral",
            state: "Maharashtra",
            pincode: "410201",
            phone: "+91 98765 43214",
            email: "neral@uavpilotacademy.com",
            timing: "Mon - Sat: 9:00 AM - 6:00 PM",
            mapLink: "#",
            color: "from-pink-500 to-rose-500"
        },
        {
            name: "UAV PILOT ACADEMY – Dahisar East",
            address: "No. 4, Ruby Complex",
            addressLine2: "H.S. Joshi Road, Dahisar (East)",
            city: "Mumbai",
            state: "Maharashtra",
            pincode: "400068",
            phone: "+91 98765 43215",
            email: "dahisar@uavpilotacademy.com",
            timing: "Mon - Sat: 9:00 AM - 6:00 PM",
            mapLink: "#",
            color: "from-rose-500 to-orange-500"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <MapPin className="w-12 h-12 text-cyan-500" />
                        <h1 className="text-5xl font-bold text-white">
                            Our Training Centers
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Visit any of our state-of-the-art training facilities across India for world-class drone pilot education
                    </p>
                </motion.div>

                {/* Centers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {centers.map((center, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                {/* Gradient Header */}
                                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${center.color} rounded-t-2xl`}></div>

                                {/* Center Name */}
                                <h3 className="text-xl font-bold text-white mb-6 mt-2 group-hover:text-cyan-400 transition-colors">
                                    {center.name}
                                </h3>

                                {/* Address */}
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                        <div className="text-gray-400 text-sm leading-relaxed">
                                            <p>{center.address}</p>
                                            <p>{center.addressLine2}</p>
                                            <p>{center.city}, {center.state} – {center.pincode}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        <a href={`tel:${center.phone}`} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                                            {center.phone}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        <a href={`mailto:${center.email}`} className="text-gray-400 text-sm hover:text-cyan-400 transition-colors break-all">
                                            {center.email}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">{center.timing}</span>
                                    </div>
                                </div>

                                {/* Get Directions Button */}
                                <motion.a
                                    href={center.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/50 rounded-xl text-sm font-semibold text-cyan-50 hover:bg-cyan-900/80 transition-all group"
                                >
                                    <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                                    Get Directions
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Can't Find a Center Near You?</h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        We're constantly expanding our network. Contact us to learn about upcoming training centers or inquire about bringing UAV Pilot Academy to your city.
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-semibold text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
                    >
                        <Mail className="w-5 h-5" />
                        Contact Us
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default TrainingCenters;
