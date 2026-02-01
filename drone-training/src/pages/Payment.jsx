import { motion } from 'framer-motion';
import { CreditCard, QrCode, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('upi');

    const paymentMethods = [
        { id: 'upi', name: 'UPI', icon: <QrCode className="w-5 h-5" /> },
        { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="w-5 h-5" /> },
        { id: 'netbanking', name: 'Net Banking', icon: <Shield className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 relative">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <CreditCard className="w-12 h-12 text-cyan-500" />
                        <h1 className="text-5xl font-bold text-white">
                            Payment Gateway
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Secure and convenient payment options for your training program enrollment
                    </p>
                </motion.div>

                {/* Payment Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
                >
                    {/* Payment Methods */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-white mb-4">Select Payment Method</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {paymentMethods.map((method) => (
                                <button
                                    key={method.id}
                                    onClick={() => setPaymentMethod(method.id)}
                                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all ${paymentMethod === method.id
                                            ? 'border-cyan-500 bg-cyan-900/20 text-cyan-400'
                                            : 'border-white/10 bg-slate-900/30 text-gray-400 hover:border-cyan-500/50'
                                        }`}
                                >
                                    {method.icon}
                                    <span className="font-semibold">{method.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* UPI Payment */}
                    {paymentMethod === 'upi' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-2xl p-8 flex flex-col items-center">
                                {/* QR Code Placeholder */}
                                <div className="w-64 h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center mb-4 border-4 border-cyan-500">
                                    <QrCode className="w-32 h-32 text-slate-600" />
                                    <div className="absolute text-center">
                                        <p className="text-sm text-slate-600 font-semibold">QR Code</p>
                                        <p className="text-xs text-slate-500">Scan to Pay</p>
                                    </div>
                                </div>
                                <p className="text-slate-700 font-semibold text-lg mb-2">Scan QR Code to Pay</p>
                                <p className="text-slate-500 text-sm">Use any UPI app to scan and complete payment</p>
                            </div>

                            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-4">
                                <p className="text-cyan-400 text-sm text-center">
                                    <strong>Note:</strong> QR Code image will be updated with actual payment QR code
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Card Payment */}
                    {paymentMethod === 'card' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Card Number</label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">CVV</label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Cardholder Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Net Banking */}
                    {paymentMethod === 'netbanking' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Select Your Bank</label>
                                <select className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white focus:border-cyan-500 focus:outline-none transition-all">
                                    <option>State Bank of India</option>
                                    <option>HDFC Bank</option>
                                    <option>ICICI Bank</option>
                                    <option>Axis Bank</option>
                                    <option>Punjab National Bank</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
                    >
                        Proceed to Pay
                    </motion.button>
                </motion.div>

                {/* Security Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold text-green-400 mb-2">Secure Payment</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    All transactions are encrypted and secure. Your payment information is protected with industry-standard security measures.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold text-amber-400 mb-2">Need Help?</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    For payment assistance or queries, contact us at <a href="mailto:payments@uavpilotacademy.com" className="text-cyan-400 hover:underline">payments@uavpilotacademy.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Payment;
